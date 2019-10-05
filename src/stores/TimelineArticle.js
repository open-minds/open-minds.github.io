class TimelineArticle {
  icon = null;

  image = null;

  title = '';

  description = '';

  constructor(icon, image, title, description) {
    this.icon = icon;
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

export default TimelineArticle;
