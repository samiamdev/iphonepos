interface IUser {
  u_username?: string;
  u_password?: string;
  u_firstname?: string;
  u_lastname?: string;
  u_phone?: string;
  u_email?: string;
  saveUser?: () => string;
}

export default IUser;
