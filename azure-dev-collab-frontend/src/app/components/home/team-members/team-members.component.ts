import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class TeamMembersComponent implements OnInit {

  teamMembers: { name: string; role: string; avatar: string; online: boolean }[] = [];

  constructor() { }

  ngOnInit() {
    // Hardcoded team members
    this.teamMembers = [
      { name: 'Alice Johnson', role: 'Frontend Developer', avatar: 'assets/avatars/alice.png', online: true },
      { name: 'Bob Smith', role: 'Backend Developer', avatar: 'assets/avatars/bob.png', online: false },
      { name: 'Charlie Lee', role: 'Data Engineer', avatar: 'assets/avatars/charlie.png', online: true },
      { name: 'Dana Williams', role: 'Project Manager', avatar: 'assets/avatars/dana.png', online: true }
    ];
  }

}
