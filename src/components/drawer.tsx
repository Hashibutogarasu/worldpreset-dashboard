import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import CloudIcon from '@mui/icons-material/Cloud';
import { AccountCircle, Settings } from '@mui/icons-material';
import NextLink from 'next/link';
import Box from '@mui/material/Box';

type DrawerItem = {
	text: string;
	icon: JSX.Element;
	path: string;
}

export default function TemporaryDrawer() {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
			<List>
				{([
					{
						icon: <EditIcon />,
						text: "Json Editor",
						path: "/"
					},
					{
						icon: <CloudIcon />,
						text: "Connect Minecraft",
						path: "/connect"
					},
					{
						icon: <AccountCircle />,
						text: "Login",
						path: "/login"
					},
					{
						icon: <Settings />,
						text: "Settings",
						path: "/settings"
					}
				] as DrawerItem[]).map((text, index) => (
					<NextLink key={text.text} href={text.path} passHref style={{
						textDecoration: "none",
						color: "inherit"
					}}>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									{text.icon}
								</ListItemIcon>
								<ListItemText primary={text.text} />
							</ListItemButton>
						</ListItem>
					</NextLink>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<MenuIcon onClick={toggleDrawer(true)} />
			<Drawer open={open} onClose={toggleDrawer(false)}>
				{DrawerList}
			</Drawer>
		</div>
	);
}
