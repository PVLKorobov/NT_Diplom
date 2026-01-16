import { Aligned } from "../../layouts/static/definitions";
import { appName } from "../../const";
import { homePageLang } from "../../lang/en";
import { VerticalCard } from "../../components/cards/definitions";
import { DynamicButton } from "../../components/buttons/definitions";
import { useModal } from "../../components/modals/definitions";

import styles from "./Home.module.scss";

const LoginModal = () => {
  return (
    <Aligned alignment="center">
      <VerticalCard>TODO</VerticalCard>
    </Aligned>
  );
};

const RegisterModal = () => {
  return (
    <Aligned alignment="center">
      <VerticalCard>TODO</VerticalCard>
    </Aligned>
  );
};

const HomePage = () => {
  const { openModal, closeModal } = useModal();
  return (
    <>
      <div className={styles["banner"]}>
        <Aligned alignment="center-left">
          <div>
            <div className={styles["banner__text-wrapper"]}>
              <h1>{appName}</h1>
              <h3>{homePageLang.appShortDescription}</h3>
            </div>
            <div className={styles["banner__login-buttons-wrapper"]}>
              <div className={styles["banner__login-buttons-container"]}>
                <DynamicButton
                  callbackFunction={() => {
                    openModal(<LoginModal />);
                  }}
                >
                  <h2>{homePageLang.logInOption}</h2>
                </DynamicButton>
              </div>
              <h2>{homePageLang.orChoice}</h2>
              <div className={styles["banner__login-buttons-container"]}>
                <DynamicButton
                  callbackFunction={() => {
                    openModal(<RegisterModal />);
                  }}
                >
                  <h2>{homePageLang.registerOption}</h2>
                </DynamicButton>
              </div>
            </div>
          </div>
        </Aligned>
        <Aligned alignment="center-right">TODO</Aligned>
      </div>
    </>
  );
};

export { HomePage };
