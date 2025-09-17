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
  editButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = btn.dataset.comment_id || btn.getAttribute("data-comment_id");
      const contentEl = document.getElementById(`comment${id}`);
      if (commentText && contentEl) commentText.value = contentEl.innerText.trim();
      if (submitButton) submitButton.innerText = "Update";
      if (commentForm) commentForm.setAttribute("action", `${basePath}/edit_comment/${id}/`);
    });
  });

  // Delete
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const id = btn.dataset.comment_id || btn.getAttribute("data-comment_id");
      if (deleteConfirm) deleteConfirm.href = `${basePath}/delete_comment/${id}/`;
      if (deleteModal) deleteModal.show();
    });
  });
});