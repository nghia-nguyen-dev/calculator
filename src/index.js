import ReactDOM from "react-dom";
import App from "components/App";
import "css/index.css";
import store from "store/store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
