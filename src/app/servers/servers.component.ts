import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean;
  serverName : string;
  serverCreated: boolean;
  serverList: object[];

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
    this.allowNewServer = false;
    this.serverList = [];
  }

  onCreateServer() {
    //this.allowNewServer = !this.allowNewServer;
    this.serverCreated = true;
    this.serverList.push({serverId: this.getNewServerId(), serverName: this.serverName},);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getNewServerId() {
    return this.serverList.length + 1;
  }

}
