$(function () {
  $('.header').each(function () {
    new Header(this);
  });
  $('.masthead').each(function () {
    new Masthead(this);
  });
  $('.mosaic').each(function () {
    new Mosaic(this);
  });
});
