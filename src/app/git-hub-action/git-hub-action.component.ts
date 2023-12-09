import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import axios from "axios";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-git-hub-action',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './git-hub-action.component.html',
  styleUrl: './git-hub-action.component.scss'
})
export class GitHubActionComponent {
  accessToken: string = '';
  orgName: string = '';
  responseData: any;
  repoName: string = ''
  currentAction: string = ''

  repoPrefix: string = ""
  repoCount: number = 0

  constructor() {
  }

  setCurrentAction(action: string, event: Event) {
    event.preventDefault();
    this.currentAction = action;
  }

  async createPair() {
    try {
      console.log("Creating Single Repository", this.repoName)
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

  async createMultiplePairRepo() {
    console.log("Creating Multiple Pair Repository")
    for (let i = 1; i <= this.repoCount; i++) {
      const pairNumber = i.toString().padStart(2, '0'); // Ensure pair number has leading zero if needed
      const repoName = `${this.repoPrefix}-${pairNumber}`;
      console.log("****** Repo Name *****", repoName)
      await this.createRepo(repoName);
    }

  }


  async deleteRepo() {
    console.log("Deleting Single Repository", this.repoName)
    let url = `https://api.github.com/repos/${this.orgName}/${this.repoName}`;
    console.log("URL",url)
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      }
    });
    return response;
  }
}
