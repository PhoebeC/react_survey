import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import thunk from "redux-thunk";
import Invite from './routes/invite/invite';
import Survey from './routes/survey/survey';
import Email from './routes/email/email_opt_in';
import ModalContainer from './components/modal_container/'

require('!style-loader!css-loader!sass-loader!../style/main.scss');

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
            <BrowserRouter>
    	         <div>
      		          <Switch>
            		        <Route path='/email' component={Email} />
                  			<Route path='/survey' component={Survey} />
                        <ModalContainer>
                  			   <Route path='/' component={Invite} />
                        </ModalContainer> 
      		          </Switch>
               </div>
            </BrowserRouter>
    </Provider>
  , document.querySelector('.container'));
