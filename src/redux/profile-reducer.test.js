import React from 'react';
import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
  posts: [
    {id: 1, message: 'It\'s my first post', like: 0},
    {id: 2, message: 'It\'s my second post', like: 0},
    {id: 3, message: 'It\'s my third post', like: 0},
  ]
}

test('proofs new post length', () => {
  // 1. tested data
  const action = addPost('Hey, my name is Dumbledore!');
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test('message of new post should be \'Hey, my name is Dumbledore!\'', () => {
  // 1. tested data
  const action = addPost('Hey, my name is Dumbledore!');
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[2].message).toBe('Hey, my name is Dumbledore!');
});

test('after deleting length of messages should be decremented', () => {
  // 1. tested data
  const action = deletePost(1)
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(2);
});

test('should return the same length of posts by incorrectly transmitted ID', () => {
  // 1. tested data
  const action = deletePost(56)
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3);
});