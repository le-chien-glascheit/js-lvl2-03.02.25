Resources -> repositories

base_url: api.github.com/v2/api

CRUD:
- create
- read
- update
- delete

- GET /repositories?limit=50&offset=100 (3 page) -> JSON list: [repo1, repo2, repo3]
- GET /repositories/{repoId}  -> JSON {repo}
- GET /repositories/:repoId  -> JSON {repo}
- POST /repositories -> create new repo (repoId automatically generated by backend)
- update:
    - PUT /repositores/{repoId} or {repoId} JSON body
    - POST /repositores/{repoId} or {repoId} JSON body
- DELETE /repositories -> редко (удаление всех)
- DELETE /repositories/{repoId}

Non-fit:
- block, copy (POST /repositories/{repoId}/block), search - (GET /repositories/search)
- batch -> 10 repo -> 10 DELETE vs DELETE /repositores?ids=f1a446c0-18a9-4f95-b341-1be97395631f,...
- ...

/repositories/{repoId}/issues
/repositories/{repoId}/issues/{issueId}
/repositories/{repoId}/issues/{issueId}/messages/{messageId}
PATH: /repositories/{repoId}/issues/{issueId}/messages/{messageId}/reactions/{reactionId} | uniqueID (bigint), uuid, stripe -> some encoding

POST /messages/{messageId}/reactions - create
DELETE /reactions/{reactionId}