import ZRequest from "../index";

export function postLogin(name: string, password: string) {
  return ZRequest.post({
    url: "/login",
    data: { name, password },
  });
}
