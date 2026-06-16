import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center gap-2 my-4">

      <button
        className="btn btn-outline-primary"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span className="px-3">
        Page <b>{currentPage}</b> of <b>{totalPages}</b>
      </span>

      <button
        className="btn btn-outline-primary"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>

    </div>
  )
}

export default Pagination