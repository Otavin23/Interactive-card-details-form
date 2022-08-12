import React from "react";
import * as S from "./style";
import BgDesktop from "../../assets/bg-main-desktop.png";

export const home = () => {
  return (
    <S.main__Card>
      <S.container__block>
        <S.aside__images>
          <img src={BgDesktop} alt="" />
        </S.aside__images>

        <S.form__block>
          <S.form__container>
            <label>cardholder name</label>
            <input type="text" placeholder="e.g. Jane Appleseed" />
            <label>card number</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />

            <S.inputs__block>
              <S.input__block__date>
                <label>exp. date (mm/yy)</label>
                <S.inputs__date>
                  <input type="text" placeholder="MM" />
                  <input type="text" placeholder="YY" />
                </S.inputs__date>
              </S.input__block__date>

              <S.input__block__cvc>
                <label>cvc</label>
                <input type="text" placeholder="e.g 123" />
              </S.input__block__cvc>
            </S.inputs__block>

            <button>confirm</button>
          </S.form__container>
        </S.form__block>
      </S.container__block>
    </S.main__Card>
  );
};

export default home;
