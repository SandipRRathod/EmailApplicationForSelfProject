import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BackendService } from '../../service/backend.service';
import { response } from 'express';
import { error, log } from 'console';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule,MatProgressSpinnerModule],

  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  isLoading: boolean = false;

  selectedFiles: File[] = [];

  data = {
    to: "",
    subject: "",
    message: ""
  }

  constructor(private email: BackendService,private snackBar: MatSnackBar) { }

  onFormSubmit() {
    this.isLoading = true; // Start loading


    if (this.selectedFiles.length > 0) {
      const formData: FormData = new FormData();

      this.selectedFiles.forEach(element => {
        formData.append('files', element)
      });

      formData.append('to', this.data.to)
      formData.append('subject', this.data.subject)
      formData.append('message', this.data.message)

      this.email.sendEmail(formData).subscribe(
        (response) => {
          this.isLoading = false;            // Stop loading
          this.snackBar.open("Sent successfully", "X", {
            duration: 100000,               // Adjust duration as needed
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: [`snackbar`]
          }).onAction().subscribe(() => {
            window.location.reload();     // Reload the page when "X" is clicked
          });
          console.log(response)
         
        },
        (error) => {
          this.isLoading = false;                // Stop loading
          console.log("failed")
          alert("error while sendeing "+ error)
        }
      )

    } else {
      this.email.sendEmailwithoutAttachment(this.data).subscribe(
        (response) => {
          this.isLoading = false; // Stop loading
          this.snackBar.open("Sent successfully", "X", {
            duration: 100000, // Adjust duration as needed
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: [`snackbar`]
          }).onAction().subscribe(() => {
            window.location.reload(); // Reload the page when "X" is clicked
          });
          console.log(response)
         
        },
        (error) => {
          this.isLoading = false; // Stop loading
          console.log("Faield")
          alert("error while sendeing "+ error)
        }
      )
    }

  }


  openFileInput(): void {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.click(); // Programmatically trigger file input click
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFiles = Array.from(input.files); // Store file names
    }
  }

  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1); // Remove the selected file at the given index
  }


  


}
