const notesData = [
  {
    id: 'notes-jT-jjsyz61J8XKiI',
    title: 'Welcome to Notes, Dimas!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
    createdAt: '2022-07-28T10:03:12.594Z',
    archived: false,
  },
  {
    id: 'notes-aB-cdefg12345',
    title: 'Meeting Agenda',
    body: 'Discuss project updates and assign tasks for the upcoming week.',
    createdAt: '2022-08-05T15:30:00.000Z',
    archived: false,
  },
  {
    id: 'notes-XyZ-789012345',
    title: 'Shopping List',
    body: 'Milk, eggs, bread, fruits, and vegetables.',
    createdAt: '2022-08-10T08:45:23.120Z',
    archived: false,
  },
  {
    id: 'notes-1a-2b3c4d5e6f',
    title: 'Personal Goals',
    body: 'Read two books per month, exercise three times a week, learn a new language.',
    createdAt: '2022-08-15T18:12:55.789Z',
    archived: false,
  },
  {
    id: 'notes-LMN-456789',
    title: 'Recipe: Spaghetti Bolognese',
    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
    createdAt: '2022-08-20T12:30:40.200Z',
    archived: false,
  },
  {
    id: 'notes-QwErTyUiOp',
    title: 'Workout Routine',
    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
    createdAt: '2022-08-25T09:15:17.890Z',
    archived: false,
  },
  {
    id: 'notes-abcdef-987654',
    title: 'Book Recommendations',
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: '2022-09-01T14:20:05.321Z',
    archived: false,
  },
  {
    id: 'notes-zyxwv-54321',
    title: 'Daily Reflections',
    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
    createdAt: '2022-09-07T20:40:30.150Z',
    archived: false,
  },
  {
    id: 'notes-poiuyt-987654',
    title: 'Travel Bucket List',
    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
    createdAt: '2022-09-15T11:55:44.678Z',
    archived: false,
  },
  {
    id: 'notes-asdfgh-123456',
    title: 'Coding Projects',
    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
    createdAt: '2022-09-20T17:10:12.987Z',
    archived: false,
  },
  {
    id: 'notes-5678-abcd-efgh',
    title: 'Project Deadline',
    body: 'Complete project tasks by the deadline on October 1st.',
    createdAt: '2022-09-28T14:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-9876-wxyz-1234',
    title: 'Health Checkup',
    body: 'Schedule a routine health checkup with the doctor.',
    createdAt: '2022-10-05T09:30:45.600Z',
    archived: false,
  },
  {
    id: 'notes-qwerty-8765-4321',
    title: 'Financial Goals',
    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
    createdAt: '2022-10-12T12:15:30.890Z',
    archived: false,
  },
  {
    id: 'notes-98765-54321-12345',
    title: 'Holiday Plans',
    body: 'Research and plan for the upcoming holiday destination.',
    createdAt: '2022-10-20T16:45:00.000Z',
    archived: false,
  },
  {
    id: 'notes-1234-abcd-5678',
    title: 'Language Learning',
    body: 'Practice Spanish vocabulary for 30 minutes every day.',
    createdAt: '2022-10-28T08:00:20.120Z',
    archived: false,
  },
  //... (other dummy data)
];

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #6200ea;
          color: white;
          padding: 1rem;
          text-align: center;
          font-size: 1.5rem;
        }
      </style>
      <div>NoteApp</div>
    `;
  }
}

class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        input, textarea, button {
          padding: 0.8rem;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        input:focus,
        textarea:focus {
          border-color: #6200ea;
          box-shadow: 0 0 4px rgba(98, 0, 234, 0.5);
        }
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #6200ea;
          color: white;
          border: none;
          cursor: pointer;
          padding: 1rem;
          font-size: 1rem;
          gap: 0.5rem;
          transition: background-color 0.3s, transform 0.3s;
        }
        button img {
          width: 1.5rem;
          height: 1.5rem;
        }
        button:hover {
          background-color: #4500a6;
          transform: translateY(-2px);
        }
        .date-container {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .date-container input[type="text"] {
          flex: 1;
          padding-right: 2.5rem;
        }
        .date-container button {
          position: absolute;
          right: 0;
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: #6200ea;
        }
        .calendar {
          position: absolute;
          z-index: 1000;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 0.5rem;
          display: none;
        }
        .calendar.show {
          display: block;
        }
        .calendar select {
          margin: 0.5rem 0;
          padding: 0.5rem;
        }
      </style>
      <form id="noteForm">
        <input type="text" id="title" placeholder="Title" required />
        <textarea id="body" placeholder="Body" required></textarea>
        <div class="date-container">
          <input type="text" id="createdAt" placeholder="Date (YYYY-MM-DD HH:mm)" required />
          <button type="button" id="calendarBtn">
            <img src="img/calendar.png" alt="Calendar Icon" />
          </button>
          <div class="calendar" id="calendar">
            <select id="month">
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <input type="number" id="day" placeholder="Day" />
            <input type="number" id="year" placeholder="Year" />
            <button type="button" id="setDateBtn">Set Date</button>
          </div>
        </div>
        <button type="submit">
          <img src="img/notes.png" alt="" />
          Add Note
        </button>
      </form>
    `;
  }

  connectedCallback() {
    this.shadowRoot.getElementById('title').focus();

    // Event listener untuk menampilkan atau menyembunyikan kalender saat ikon kalender ditekan
    this.shadowRoot.getElementById('calendarBtn').addEventListener('click', () => {
      const calendar = this.shadowRoot.getElementById('calendar');
      calendar.classList.toggle('show');
    });

    // Event listener untuk mengatur tanggal saat tombol "Set Date" ditekan
    this.shadowRoot.getElementById('setDateBtn').addEventListener('click', () => {
      const month = this.shadowRoot.getElementById('month').value;
      const day = this.shadowRoot.getElementById('day').value;
      const year = this.shadowRoot.getElementById('year').value;

      // Mengatur nilai input tanggal sesuai dengan yang dipilih pengguna
      this.shadowRoot.getElementById('createdAt').value = `${year}-${month}-${day}`;
      this.shadowRoot.getElementById('calendar').classList.remove('show'); // Menyembunyikan kalender setelah tanggal dipilih
    });

    this.shadowRoot.getElementById('noteForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const title = this.shadowRoot.getElementById('title').value;
      const body = this.shadowRoot.getElementById('body').value;
      const createdAt = this.shadowRoot.getElementById('createdAt').value; // Menggunakan nilai yang dimasukkan pengguna
      this.dispatchEvent(
        new CustomEvent('note-added', {
          detail: { title, body, createdAt },
          bubbles: true,
          composed: true,
        })
      );
      this.shadowRoot.getElementById('noteForm').reset();
      this.shadowRoot.getElementById('title').focus();
    });
  }
}

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      ${notesData
        .map(
          (note) => `
        <note-item 
          id="${note.id}"
          title="${note.title}" 
          body="${note.body}" 
          createdAt="${note.createdAt}">
        </note-item>
      `
        )
        .join('')}
    `;
  }
}

class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['title', 'body', 'createdAt'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: white;
          padding: 1rem;
          border: 1px solid #ddd;
          margin-bottom: 1rem;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: flex-start;
        }
        .note-item-icon {
          margin-right: 1rem;
        }
        .note-item-icon img {
          width: 2rem;
          height: 2rem;
        }
        .note-item-details {
          flex: 1;
        }
        .title {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .body {
          margin-bottom: 0.5rem;
        }
        .createdAt {
          font-size: 0.8rem;
          color: #666;
        }
        button {
          background-color: red;
          color: white;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          transition: background-color 0.3s, transform 0.3s;
        }
        button:hover {
          background-color: #cc0000;
          transform: translateY(-2px);
        }
      </style>
      <div class="note-item-icon">
        <img src="img/sticky-notes.png" alt="Note Icon">
      </div>
      <div class="note-item-details">
        <div class="title">${this.getAttribute('title')}</div>
        <div class="body">${this.getAttribute('body')}</div>
        <div class="createdAt">${new Date(this.getAttribute('createdAt')).toLocaleString()}</div>
        <button class="delete-note">Delete</button>
      </div>
    `;
    this.shadowRoot.querySelector('.delete-note').addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('note-deleted', {
          detail: { id: this.id },
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

customElements.define('app-bar', AppBar);
customElements.define('note-form', NoteForm);
customElements.define('note-list', NoteList);
customElements.define('note-item', NoteItem);

document.querySelector('note-form').addEventListener('note-added', (e) => {
  const { title, body, createdAt } = e.detail;
  const newNote = {
    id: `notes-${Math.random().toString(36).substr(2, 9)}`,
    title,
    body,
    createdAt,
    archived: false,
  };
  notesData.push(newNote);
  document.querySelector('note-list').render();
});

document.querySelector('note-list').addEventListener('note-deleted', (e) => {
  const { id } = e.detail;
  const noteIndex = notesData.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    notesData.splice(noteIndex, 1);
    document.querySelector('note-list').render();
  }
});
