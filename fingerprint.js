var fingerprint = {
	'server': [
		{
			name: 'Apache',
			tests: [/Apache/],
			icon: 'apache.png'
		},
		{
			name: 'Google Web Server',
			tests: [/gws/],
			icon: 'gws.ico'
		},
		{
			name: 'Lighttpd',
			tests: [/lighttpd/],
			icon: 'lighttpd.png'
		},
		{
			name: 'Microsoft-IIS',
			tests: [/IIS/],
			icon: 'iis.png'
		},
		{
			name: 'Nginx',
			tests: [/nginx/],
			icon: 'nginx.ico'
		},
		{
			name: 'Unknown',
			tests: [/./],
			icon: 'unknown.png',
		}
	],
	'x-powered-by': [
		{
			name: 'PHP',
			tests: [/PHP/],
			icon: 'php.ico',
		},
		{
			name: 'ASP.NET',
			tests: [/ASP/],
			icon: 'asp.ico'
		},
		{
			name: 'Java',
			tests: [/java|jboss|[jn]etty/i],
			icon: 'java.ico'
		},
		{
			name: 'Unknown',
			tests: [/./],
			icon: 'unknown.png'
		}
	]
};
