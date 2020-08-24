export function usePopupWindow(args: Parameters<typeof popupWindow>): Window
{
  const popup = popupWindow(...args);

  return popup;
}

// TODO: This is a straight up copy-paste from react-tinacms-github/src/github-client/popupWindow.ts
export function popupWindow(
  url: string,
  title: string,
  window: any,
  w: number,
  h: number
): Window {
  const y = window.top.outerHeight / 2 + window.top.screenY - h / 2
  const x = window.top.outerWidth / 2 + window.top.screenX - w / 2
  return window.open(
    url,
    title,
    'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=' +
      w +
      ', height=' +
      h +
      ', top=' +
      y +
      ', left=' +
      x
  )
}

export default usePopupWindow;
