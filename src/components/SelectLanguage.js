/*******************************************************************************
 * Copyright 2022 (C) PVS Solution.
 *
 * Created on : 22/07/2022
 * Author: Dinh Vo
 *******************************************************************************/

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconTitle from "./IconTitle";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import content from "../../public/locales/content";
import Link from "next/link";

export default function SelectLanguage() {
  const [localeDefault, setLocaleDefault] = React.useState("");
  const { locale, locales, defaultLocale, asPath,pathname } = useRouter();

  useEffect(() => {
    console.log( locale, locales, defaultLocale, asPath,pathname)
    setLocaleDefault(locale)
  }, []);

  const handleChange = (event) => {
    setLocaleDefault(event.target.value);
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      <style jsx global>{`
        .select-box-m8 .select-box-m8__select em{
          color: white;
        }
        .select-box-m8 .select-box-m8__select .MuiSelect-icon{
          color: white;
        }
        .select-box-m8 .select-box-m8__icon-title{
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.0015em;
          color: white;
          display: flex;
          align-items: center;

        }
        .select-box-m8 .select-box-m8__icon-title .icon-title__title{
          padding-left: 5px;
        }
        .MuiModal-root .select-box-m8__icon-title .icon-title__title{
          padding-left: 5px;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 0.0015em;
          color: #858585;
        }
        .MuiModal-root .select-box-m8__icon-title{
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: .0015em;
          display: flex;
          align-items: center;
        }
        `}</style>

      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        variant="standard"
        className="select-box-m8"
        style={{ margin: 0 }}
      >
        <Select
          value={localeDefault}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className={"select-box-m8__select"}
          style={{
            padding: "20px 0",
          }}
        >
          <MenuItem
            value="vi-VN"
            className="select-box-m8__menu-item"
            style={{
              border: "red",
            }}
          >
            <Link
              activeClassName={locale === "vi-VN"}
              href={asPath}


              locale="vi-VN"
            >
              <IconTitle
                variant="p"
                component="h6"
                className="select-box-m8__icon-title"
                icon={
                  <Image
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
                    }
                    width={30}
                    height={20}
                    alt="emoji"
                  />
                }
                title={content[locale]["title.vietnamese"]}
              />
            </Link>
          </MenuItem>
          <MenuItem className="select-box-m8__menu-item" value={"en-US"}>
            <Link
              activeClassName={locale === "en-US"}
              href={asPath}
              locale="en-US"
            >
              <IconTitle
                variant="p"
                component="h6"
                className="select-box-m8__icon-title"
                icon={
                  <Image
                    src={
                      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    }
                    width={30}
                    height={20}
                    alt="emoji"
                  />
                }
                title={content[locale]["title.english"]}
              />
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
