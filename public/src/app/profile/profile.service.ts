import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

// import { User } from "./user.model";
import { Skill } from "./skill.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class ProfileService {
  private skills: Skill[] = [];

  constructor(private http: Http, private errorService: ErrorService) { }

  addSkill(skill: String) {
    const body = JSON.stringify(skill);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const token = localStorage.getItem('token')
      ? `?tokens=${localStorage('token')}` : '';
    return this.http.post(`http://localhost:3000/profile/skills/${token}`, body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const skill = new Skill(
          result.obj.skill,
          result.obj.user._id);
        this.skills.push(skill);
        return skill;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json())
      });
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
