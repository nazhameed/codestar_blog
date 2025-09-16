document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(".edit-comment");
  const deleteButtons = document.querySelectorAll(".delete-comment");

  const commentForm = document.getElementById("commentForm");
  const commentText = document.querySelector("#commentForm textarea, #id_body");
  const submitButton = document.getElementById("submitButton");

  const deleteConfirm = document.getElementById("deleteConfirm");
  const deleteModalEl = document.getElementById("deleteModal");
  const deleteModal = deleteModalEl ? new bootstrap.Modal(deleteModalEl) : null;

  const basePath = window.location.pathname.replace(/\/$/, ""); // /post-slug

  // Edit
  for (let button of editButtons) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const commentId = e.currentTarget.dataset.commentId;
      const contentEl = document.getElementById(`comment${commentId}`);
      const commentContent = contentEl ? contentEl.innerText.trim() : "";

      if (commentText) commentText.value = commentContent;
      if (submitButton) submitButton.innerText = "Update";
      if (commentForm) commentForm.setAttribute("action", `${basePath}/edit_comment/${commentId}`);
    });
  }

  // Delete
  for (let button of deleteButtons) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const commentId = e.currentTarget.dataset.commentId;
      if (deleteConfirm) deleteConfirm.href = `${basePath}/delete_comment/${commentId}`;
      if (deleteModal) deleteModal.show();
    });
  }
});