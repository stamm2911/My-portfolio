function NavButton({section, handlePageChange}) {
  return (
    <button onClick={() => handlePageChange(section)} className="glowing-button" href={section}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {section === 'ContactMe'? 'Contact Me' : section}
    </button>
  );
}

export default NavButton;
