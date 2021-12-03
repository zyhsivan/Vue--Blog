import ZRequest from "../index";

export function getArticleType() {
  return ZRequest.get({
    url: "/articleType",
  });
}

export function postArticle(dataProps: any) {
  const { type_id, title, article_content, introduce, addTime } = dataProps;
  return ZRequest.post({
    url: "/article",
    data: { type_id, title, article_content, introduce, addTime },
  });
}

export function getArticle() {
  return ZRequest.get({
    url: "/getArticle",
  });
}

export function removeArticle(id: number) {
  console.log(id);
  return ZRequest.post({
    url: "/oneArticle",
    data: { id },
  });
}

export function getOneArticle(id: number) {
  return ZRequest.get({
    url: "/oneArticle",
    params: { id },
  });
}
