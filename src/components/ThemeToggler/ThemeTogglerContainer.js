import { connect } from "react-redux";
import { toggleTheme } from "../../modules/theme/themeActions";
import { getThemeToggler } from "../../modules/theme/themeSelectors";
import ThemeToggler from "./ThemeToggler";

const mapStateToProps = (state) => ({
  isChecked: getThemeToggler(state),
});

const mapDispatchToProps = {
  onThemeToggle: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
