export class UserModel {
  constructor(id, name, office, position, email) {
    this.id = id;
    this.name = name;
    this.office = office;
    this.position = position;
    this.email = email;
  }
  static fromJSON(json) {
    return new UserModel(
      json.id,
      json.name,
      json.office,
      json.position,
      json.email
    );
  }
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      office: this.office,
      position: this.position,
      email: this.email,
    };
  }
}
