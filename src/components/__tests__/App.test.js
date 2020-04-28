import React from 'react';
import App from 'components/App';
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {shallow} from "enzyme";


let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
});

it('shows a comment box', function () {
    expect(wrapper.find(CommentBox).length).toEqual(1)
});

it('shows a comment list', function () {
    expect(wrapper.find(CommentList).length).toEqual(1)
});
