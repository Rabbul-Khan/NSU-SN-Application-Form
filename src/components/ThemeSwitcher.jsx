// import useDarkMode from "use-dark-mode";
// import { Switch } from "@nextui-org/react";
// import { MoonIcon } from "./MoonIcon";
// import { SunIcon } from "./SunIcon";
// import { useState } from "react";

// export const ThemeSwitcher = () => {
//   const darkMode = useDarkMode(false);
//   const [dark, setDark] = useState(false);

//   return (
//     <div className="flex w-full justify-end px-14  py-5 ">
//       <Switch
//         defaultSelected
//         size="lg"
//         color="warning"
//         startContent={<SunIcon />}
//         endContent={<MoonIcon />}
//         onClick={() => {
//           if (dark) {
//             darkMode.enable();
//             setDark(false);
//           } else {
//             darkMode.disable();
//             setDark(true);
//           }
//         }}
//       ></Switch>
//     </div>
//   );
// };
