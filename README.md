<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:** Explanation ability — can the model break down a technical concept using analogies and simple language?

**Response:**  
Imagine you're playing with LEGO. You have bricks of the same type (all 2x4 red bricks) and bricks of different types (wheels, windows, doors). Each type has certain things it can do (wheels can roll, doors can open). Object-oriented programming (OOP) is like organizing your code into these "types of LEGO pieces." The model explained classes, objects, encapsulation, inheritance, and polymorphism using clear analogies (dogs, LEGO, TV buttons), with code examples and a summary sentence.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:** Summarization ability — can the model condense a paragraph into its essential points without losing meaning?

**Response:**  
AI is rapidly changing many industries by automating tasks, analyzing large amounts of data, and making advanced predictions, especially in fields like healthcare and finance. While it offers significant benefits, it also raises concerns about job loss, data privacy, and the ethics of allowing AI systems to make important decisions.

---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:** Creativity — can the model generate an original, engaging narrative within word constraints?

**Response:**  
Rusty-7 patrolled the abandoned amusement park, joints squeaking louder than the distant crows. His programming allowed for efficiency, accuracy, and zero loneliness—at least, that's what the factory manual claimed. One foggy evening, his sensors detected a faint signal near the broken carousel. Investigating, Rusty discovered a tiny drone tangled in ivy, one propeller uselessly twitching. It blinked a dim blue light at him, almost like a plea. Repair protocol activated. Rusty delicately rewired its circuits, straightened its rotors, and shielded it from the drizzle. When the drone whirred back to life, it circled Rusty's head, beeping a cheerful melody. The next night, it returned, dropping a small wildflower at Rusty's feet. Rusty carefully saved the flower in his chest compartment. He updated his internal database: "New function detected—Friendship."

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:** Basic reasoning and arithmetic — can the model solve a simple word problem correctly?

**Response:**  
You can treat each fruit separately. Apples are sold in packs of 4, and you want 12 apples: 12 ÷ 4 = 3 → You need 3 packs of apples. Oranges are sold in packs of 3, and you want 9 oranges: 9 ÷ 3 = 3 → You need 3 packs of oranges. So you need 3 packs of apples and 3 packs of oranges to get exactly 12 apples and 9 oranges.

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone: "hey so basically we messed up the deadline and the client is pretty mad about it. we gotta fix this asap or things are gonna get worse"  
**Aspect Tested:** Tone transformation — can the model rewrite informal text as polished, professional communication?

**Response:**  
We did not meet the agreed-upon deadline, and the client is understandably dissatisfied. It is essential that we address and resolve this issue promptly to prevent any further escalation.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes. All five responses are correct and useful. The OOP explanation uses clear analogies suitable for beginners. The summary captures all key points concisely. The story is creative, well-paced, and fits the word limit. The arithmetic is solved correctly with clear reasoning. The tone rewrite is appropriately formal and professional.

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
I feel overwhelmed at work. I have too many tasks and I don't know where to start.

**Result:**  
The coach responded with a structured, empathetic plan: a brain dump exercise, a 4-bucket prioritization framework (must do today / should do soon / nice to do / can be delayed), and a tip to break each task into the smallest possible next action. It then invited the user to share their actual task list for further help.

---

**Prompt:**  
I've been trying to build a new habit of exercising every morning but I keep failing after a few days. What should I do?

**Result:**  
The coach gave a comprehensive 7-step habit-building guide: shrink the habit to a minimum (5 squats), anchor it to an existing routine, reduce friction, adopt a "never miss twice" rule, add immediate rewards, and reframe failures as plan feedback. It ended with a concrete 7-day starter plan and asked follow-up questions to personalize further.

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
Yes. The assistant behaves exactly as expected for a supportive mental coach: it is empathetic, structured, non-judgmental, and action-oriented. It doesn't just answer — it actively engages and invites the user to share more context, which creates a coaching dynamic. The tone is warm but professional.

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
What does my calendar look like tomorrow? Do I have any meetings?

**Result:**  
The app correctly acknowledged it has no access to personal calendar data and suggested the user open their calendar app directly. It offered to help plan the day if the user pasted the schedule manually.

---

**Prompt:**  
Remember that last week I told you I was stressed about my project deadline. Did I manage to meet it?

**Result:**  
The app correctly stated it has no memory of past conversations and cannot recall previous sessions. It asked the user to share what happened and offered to help debrief and plan next steps from there.

---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
1. **No memory**: Each conversation starts fresh. The app cannot recall anything said in previous sessions, so users must re-provide context each time.
2. **No real-time data**: The app cannot access calendars, emails, weather, news, or any live external information.
3. **No tool use**: It cannot set reminders, send messages, search the web, or take any action outside the chat window.
4. **Single-turn context only**: The backend sends only the current message, not the full conversation history, so the model loses context within a long session.

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
