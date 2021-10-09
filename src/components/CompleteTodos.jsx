export const CompleteTodos = (props) => {
  return (
    <>
      <div className="complete-area">
        <p>完了のTODO</p>
        {props.completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <ul>
                <li>1</li>
                <button onClick={() => props.onClickBack(index)}>戻す</button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};
