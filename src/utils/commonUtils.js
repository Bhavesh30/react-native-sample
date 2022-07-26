/* JSON */
export const jsonToQueryString = json => {
  return (
    '?' +
    Object.keys(json)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
};

export const jsonToBodyFormData = json => {
  var bodyFormData = new FormData();

  Object.keys(json).map(function (key) {
    bodyFormData.append(encodeURIComponent(key), encodeURIComponent(json[key]));
  });
  return bodyFormData;
};
