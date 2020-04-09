# lha
Lifray DXP JSONWS API

# Prerequisite setup
Liferay DXP Setup
Apache Tomcat

# Project setup

Set the properties in <CODE>{Liferay Server folder}/portal-ext.properties</CODE> file and save it.

<code>json.service.auth.token.hosts.allowed=127.0.0.1,SERVER_IP</code>

<code>json.service.auth.token.enabled=false</code>

<code>jsonws.web.service.public.methods=*</code>

<code>jsonws.servlet.hosts.allowed=127.0.0.1,SERVER_IP</code>


Now start the liferay server & create the blank new site & import the downloaded LAR file.

Create the one folder for the website with any name and paste the downloaded files and folder except LAR & README.md and move the website folder to Apache Tomcat Root directory.

<code>{Tomcat installation folder}\webapps\ROOT</code>

# Change the Tomcat port number & start the server

Locate <code>server.xml</code> in <code>{Tomcat installation folder}\conf</code>

Find following similar statement

    <Connector port="8080" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8444" />

Change the Connector port=”8080″ port to any other port number.

    <Connector port="8081" protocol="HTTP/1.1" connectionTimeout="20000" redirectPort="8444" />

Now Tomcat server runs on port 8081.

Edit and save the <code>server.xml</code> file and start Tomcat server.


<code>{Tomcat installation folder}\bin\startup.bat</code>
	
Open the <code>js/jax-custom.js</code> file in any editor and update the liferay portal username and password.

<code>// Define option defaults</code>

<code>var defaults = {</code>

<code>	username: "test@liferay.com",</code>

<code>	password: "test", </code>

<code>	...</code>

<code>}</code>


Run the website URL 

<code>http://localhost:8081/WEBSITEFOLDERNAME/</code>


Now open a Liferay site and edit & publish the webcontent.

Refresh the website page.
