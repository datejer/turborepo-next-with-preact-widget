import habitat from "preact-habitat";

import Widget from "./Widget";

function init() {
  const _habitat = habitat(Widget);

  _habitat.render({
    selector: ".my-widget",
    inline: false,
    clean: true,
  });
}

init();
