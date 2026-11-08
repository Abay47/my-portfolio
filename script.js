
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // 2. Skills Filter
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillCards = document.querySelectorAll('.skill-card');
  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      skillCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        card.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
      });
    });
  });




  const filterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.filter;

        // Update active button
        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
        });

        button.classList.add("active");

        // Filter skill cards
        skillCards.forEach((card) => {
            const cardCategory = card.dataset.category;

            const shouldShow =
                selectedCategory === "all" ||
                cardCategory === selectedCategory;

            card.classList.toggle("is-hidden", !shouldShow);
        });
    });
});
// =========================================
// SKILLS CATEGORY FILTER
// =========================================

const skillsFilterButtons = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

skillsFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    // Update active button
    skillsFilterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    // Filter skill cards
    skillCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      const shouldDisplay =
        selectedCategory === "all" ||
        cardCategory === selectedCategory;

      card.hidden = !shouldDisplay;
    });
  });
});




  // 3. CV Modal
  const openCvBtn = document.getElementById('openCvBtn');
  const closeCvBtn = document.getElementById('closeCvBtn');
  const cvModal = document.getElementById('cvModal');
  const printCvBtn = document.getElementById('printCvBtn');

  if (openCvBtn && cvModal && closeCvBtn) {
    openCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cvModal.classList.add('open');
    });
    closeCvBtn.addEventListener('click', () => {
      cvModal.classList.remove('open');
    });
    if (printCvBtn) {
      printCvBtn.addEventListener('click', () => window.print());
    }
  }

  // 4. Contact Form Handler
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const subject = document.getElementById('userSubject').value;
      const message = document.getElementById('userMessage').value;

      formStatus.innerHTML = "Opening email client...";
      formStatus.style.color = "#34d399";

      const mailtoUrl = `mailto:abebaabayneh467@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailtoUrl;
    });
  }
});