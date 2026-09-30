import { Component, Input } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-route-card',
  standalone: true,
  imports: [CardModule, DialogModule, PanelModule],
  templateUrl: './route-card.component.html',
  styleUrl: './route-card.component.less',
})
export class RouteCardComponent {
  @Input({ required: true }) route!: Route;

  previewVisible = false;
  previewImage = '';
  previewAlt = '';
  previewTitle = '';
  gpxDownloading = false;

  openImagePreview(image: string, alt: string, title: string) {
    this.previewImage = image;
    this.previewAlt = alt;
    this.previewTitle = title;
    this.previewVisible = true;
  }

  async downloadGpx(gpxFile: string, title: string) {
    this.gpxDownloading = true;
    const fileName = `${title.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '')}.gpx`;

    try {
      const response = await fetch(gpxFile);
      if (!response.ok) throw new Error(`Could not load GPX file (${response.status})`);
      const gpxBlob = await response.blob();

      if (Capacitor.isNativePlatform()) {
        const savedFile = await Filesystem.writeFile({
          path: fileName,
          // The native Filesystem bridge accepts Base64 strings. Blob values are
          // supported only by its browser implementation.
          data: await this.blobToBase64(gpxBlob),
          directory: Directory.Documents,
          recursive: true,
        });
        await Share.share({
          title: 'Save or open GPX route',
          text: title,
          url: savedFile.uri,
          dialogTitle: 'Download GPX',
        });
      } else {
        const downloadUrl = URL.createObjectURL(gpxBlob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(downloadUrl);
      }
    } catch (error) {
      console.error('GPX download failed', error);
      const detail = error instanceof Error ? `\n\n${error.message}` : '';
      window.alert(`The GPX file could not be downloaded. Please try again.${detail}`);
    } finally {
      this.gpxDownloading = false;
    }
  }

  private blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => reject(reader.error ?? new Error('Could not read GPX file'));
      reader.onload = () => {
        if (typeof reader.result !== 'string') {
          reject(new Error('Could not encode GPX file'));
          return;
        }

        // FileReader returns a data URL. The native Filesystem plugin needs
        // only the Base64 payload after the comma.
        resolve(reader.result.substring(reader.result.indexOf(',') + 1));
      };
      reader.readAsDataURL(blob);
    });
  }
}
