Microb user interface
=====================

User interface for Microb api server using with Caddy file server

Get [Microb api server](https://github.com/synw/microb) up and running

Clone and place the folder at Caddy's static root

Configure the [Caddy static files server](http://caddyserver.com/):

  ```json
localhost:8080 {
	gzip
	log /home/myuser/path_to_static_root/var/access.log
	root /home/myuser/path_to_static_root
	templates
	cors
	header / {
		X-XSS-Protection "1"
		X-Content-Type-Options "nosniff"
		X-Frame-Options "SAMEORIGIN; always"
	}
}
  ```

Run: `./caddy`

Open `http://localhost:8080`