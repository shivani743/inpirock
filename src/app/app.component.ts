import { Component } from '@angular/core';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inspi';
  private sampleId = "Aap_uEDAR9L9IRJLWSjOKhTCSsziKeN7BQw7qerqNI2FdQN0pNKNPF5t4c2mdslJocY7Fx3axAUPy7lA8ath9yNBfXi2H8NvZHf33P4YPbWid9Zt6s8tmfVq7Wkf1to813ov5FlNML_G3ZVwN1IOJZAuCVtQIpmZY6kF1qSV050Qo2ZhSaE";
  private height = 480
  private width = 640
  constructor(private server: ServerService) {

  }

  async ngOnInit() {
    // const res = await this.server.getPlaces('Goa')
    // console.log(res, "saty")
  }

}



