export const Loading = ({ display }: { display: boolean }) =>
  display ? (
    <div className="loadingParentClass">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
