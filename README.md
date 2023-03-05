# Commit History:

------------------------------

# 3rd Commit - Added Chat Component & Refactoring
Time Stamp: 5th March 2K23 - 03:37 PM

Status - Building Base Skeleton Phase-1

1. Generate a new chat component as a parent for chat-input & chat-window component: `ng generate component chat/chat` <br/>
Note: It might require manually updating Module import statements with correct paths.
2. Updated app.module.ts & chat.module.ts by importing ChatModule, ChatService, ChatComponent
3. Moved the following under chat module (folder): `chat.service.ts, chat-message.model.ts, chat-input component, chat-window component`
4. Removed following test files: `app.component.spec.ts, chat.service.spec.ts, chat-input.component.spec.ts, chat-window.component.spec.ts`

------------------------------

# 2nd Commit - Added empty module, components, service
Time Stamp: 4th March 2K23 - 06:06 PM

1. Generate a new module for the chat feature: `ng generate module chat`
2. Generate a new component for the chat window: `ng generate component chat-window --module=chat`
3. Generate a new component for the chat input box: `ng generate component chat-input --module=chat`
4. Generate a new service for the chat feature: `ng generate service chat`
5. Generate a new interface for the chat message: `ng generate interface chat-message --type=model`

------------------------------

# Init Commit - Create Project `Ask-GPT` from scratch.
Time Stamp: 4th March 2K23 - 05:29 PM

1. Install Node JS: `https://nodejs.org/en/download/`
2. Install Angular: `npm install -g @angular/cli`
3. Create a new Angular project: `ng new Ask-GPT`
4. Change directory to the newly created project: `cd Ask-GPT`

------------------------------
