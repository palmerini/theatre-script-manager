import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  characters: string[] = [];
  script: any[] = [];
  selectedCharacter: string | null = null;

  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.uploadService.uploadFile(file).subscribe((data: any[]) => {
        this.script = data;
        this.characters = Array.from(new Set(data.map(item => item.character)));
      });
    }
  }

  onSelectCharacter(character: string): void {
    this.selectedCharacter = character;
  }

  isHighlighted(character: string): boolean {
    return this.selectedCharacter === character;
  }
}

