const showGlobalModal = (modalContent, large) => ({
  type: 'SHOW_GLOBAL_MODAL',
  modalContent,
  large,
  showGlobalModal: true,
});

export default showGlobalModal;
