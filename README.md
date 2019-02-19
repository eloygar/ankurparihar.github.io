# ankurparihar.github.io
[Ankur's Little Playground](https://ankurparihar.github.io)

## Important
- All the links must be domain relative not directory relative
- Style and Scripts must be included in relative files not in global files
- Use standard [index.html](index.html) and make necessary changes.
- Content must be inside `.content` div starting with `stylesheet` element and ending with `injectedJS` element

## Working in local environment
- Use local virtual host. Due to all relative links the host must be changed.
- Create an entry if not `127.0.0.1 ankurparihar.github.io` in */etc/hosts* . Use your virtual host ip address in place of `127.0.0.1`.

## Content upload

### General
- Upload content and get a reference like a link to Google drive
- Upload relative image  of size 268x394 in `/media/{directory}`
- Append `card` with image name to use it on home screen

### Course content
- Add course information in [script.js](/res-iitr/script.js). If the course is new simply add that course in `Semester` variable.
- Use `svg_data` to display relative material icon
- Update semester `cur_sem`

### Demos/Projects
- Add project info in `Projects`
- Create relative entry in `Semester` if the project is course related
- For live project create subdir under `demo` directory with same name as written in `Projects`
- Upload relative image of size 800x400 or ratio 2:1 in `/media/demo/` directory

### Dynamic page
- Only dynamic page relative to home can be made. i.e. at level 1
- Create page in appropriate directory and make sure to have a unique `nav-icon` to be used by `cur_tab`
- Update `references` in [dynamic.js](/media/dynamic.js)
- Update all other index files to add that page in navigation menu and footer if necessary

### Home page ribbons
- Copy ribbon skeleton from [index.html](index.html)
- Simply create entry in [home.js](/media/home.js) if creating new ribbon
- Make sure to follow convention
- Calculate timestamp using
```javascript
	(new Date()).getTime();
```

## Index files
- /index.html
- /error.html
- /res-iitr/index.html
- /demo/index.html
- /demo/fractal-generator/index.html
- /changelog/index.html