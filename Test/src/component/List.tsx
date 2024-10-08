import React, { FunctionComponent, ReactElement, useMemo } from "react";
import { NewFormData } from "../mock/mockServer";

const List: FunctionComponent<NewFormData> = ({
  level,
  name,
  children,
  count,
  id,
}): ReactElement => {
  const childrenLength = useMemo(() => children.length, [children]);
  return (
    <div className="wrap-collabsible">
      <input id={`collapsible-${id}`} className="toggle" type="checkbox" />
      <label htmlFor={`collapsible-${id}`} className={`lbl-toggle ${childrenLength != 0 ? 'arrow' : ''}`}>
        <div className="title">
        {name}
        </div>
       
        {childrenLength != 0 && (
          <>
            {childrenLength}
          </>
        )}
      </label>
      {childrenLength != 0 && (
        <div className="collapsible-content">
          <div className="content-inner">
            {children.map((el) => (
              <List key={el.id} {...el} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
