import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import axios from "axios";

@Component({
  selector: 'app-git-hub-action',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './git-hub-action.component.html',
  styleUrl: './git-hub-action.component.scss'
})
export class GitHubActionComponent {
  accessToken: string = '';
  orgName: string = '';
  responseData: any;
  repoName: string = 'pair-'
  pairCount: number = 0

  constructor() {
  }

  async createPair() {
    try {
      const response = await this.createRepo(this.repoName);
      this.responseData = response.data; // Store response data
      console.log(this.responseData); // Display response in console (modify as needed)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  private async createRepo(repoName: string) {
    const response = await axios.post(`https://api.github.com/orgs/${this.orgName}/repos`, {
      name: repoName,
      private: true,
    }, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      }
    });
    return response;
  }
}
