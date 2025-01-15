import React from "react";
import { useNavigate, useParams } from "react-router";
import back from "@/assets/back.png";

import ConditionalWrapper from "@/shared/components/ConditionalWrapper";

function HeaderName() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params?.id;

  return (
    <React.Fragment>
      <h1 className="xxs:hidden md:block text-2xl font-semibold ml-4">Notes</h1>
      <ConditionalWrapper condition={id ? false : true}>
        <h1 className="xxs:block text-2xl font-semibold ml-4 md:hidden">
          Notes
        </h1>
      </ConditionalWrapper>

      <ConditionalWrapper condition={id ? true : false}>
        <img
          src={back}
          className="xss:block w-8 ml-4 md:hidden"
          onClick={() => navigate("/")}
        />
      </ConditionalWrapper>
    </React.Fragment>
  );
}

export default HeaderName;
