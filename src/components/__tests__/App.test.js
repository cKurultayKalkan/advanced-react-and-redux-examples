import React from 'react';
import App from '../App';
import CommentBox from "../CommentBox";
import {shallow} from "enzyme";

it('shows a comment box', function () {

    const wrapper = shallow(<App/>);
    expect(wrapper.find(CommentBox).length).toEqual(1)

});
