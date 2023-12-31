export const GA_TRACKING_ID = process.env.GA_ID;

export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url,
    content_type: "",
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string;
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
