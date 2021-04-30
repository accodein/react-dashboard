import classes from "./styles/spinner.module.scss";

const spinner = () => {
  return (
    <div class={classes.container}>
      <div class={classes.bk}>
        <div class={classes.mid}>
          <div class={classes.fore}>
            <div class={classes.figure}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default spinner;
