import { Navbar } from '../views/components/Navbar';
import { Post } from '../views/components/Post';
import { PostModal } from '../views/components/PostModal';
import {
  openPostModal,
  closePostModal,
  showPostComments,
  openEditPostModal,
  savePostChanges,
  openDeletePostModal,
  deletePost,
  changePostlist,
} from '../dispatcher/dispatcher';
import { Comment } from '../views/components/Comment';
import { EditPostModal } from '../views/components/EditPostModal';

export const createFragmentList = (data, modalType) => {
  const fragment = $(document.createDocumentFragment());
  data.forEach(element => {
    $(fragment).append(modalType(element));
  });
  return fragment;
};
export const addNavBar = fragment => {
  return $(fragment).prepend(Navbar);
};
export const createModalFragment = (content, modalType) => {
  const fragment = $(document.createDocumentFragment());
  $(fragment).append($('#root').html());
  $(fragment).append(modalType(content));
  return fragment;
};

export const addEventListenersFragment = status => {
  $(document).off().find('*').off();
  switch (status) {
    case 'home':
      $('.post-item__content h2').on('click', openPostModal);
      $('.nav-page__button').on('click', changePostlist);
      $('.bx-edit').on('click', openEditPostModal);
      $('.bxs-trash').on('click', openDeletePostModal);
      break;
    case 'postModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#comment-button').on('click', showPostComments);
      break;
    case 'editPostModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#save-button').on('click', savePostChanges);
    case 'deletePostModal':
      $('.bx-x-circle').on('click', closePostModal);
      $('#yes-button').on('click', deletePost);
      $('#no-button').on('click', closePostModal);
  }
};

export const validateInput = () => {
  return (
    $('#editPostModal-Content__title').val().length > 1 &&
    $('#editPostModal-Content__body').text().length > 10
  );
};
