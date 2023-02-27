import { useState } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToggle, upperFirst } from '@mantine/hooks';
import { Link, Outlet } from 'react-router-dom'
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
} from '@mantine/core';
import {
    Home2,
    Gauge,
    DeviceDesktopAnalytics,
    CalendarStats,
    User,
    Fingerprint,
    Settings
} from 'tabler-icons-react'
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
    },

    aside: {
        flex: '0 0 60px',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
    },

    main: {
        flex: 1,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    mainLink: {
        width: 44,
        height: 44,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    mainLinkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },

    title: {
        boxSizing: 'border-box',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xl,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        padding: theme.spacing.md,
        paddingTop: 18,
        height: 60,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
    },

    logo: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: 60,
        paddingTop: theme.spacing.md,
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
            }`,
        marginBottom: theme.spacing.xl,
    },

    link: {
        boxSizing: 'border-box',
        display: 'block',
        textDecoration: 'none',
        borderTopRightRadius: theme.radius.md,
        borderBottomRightRadius: theme.radius.md,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        padding: `0 ${theme.spacing.md}px`,
        fontSize: theme.fontSizes.sm,
        marginRight: theme.spacing.md,
        fontWeight: 500,
        height: 44,
        lineHeight: '44px',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
    },

    linkActive: {
        '&, &:hover': {
            borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
                .background,
            backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
                .background,
            color: theme.white,
        },
    },
}));

const mainLinksMockdata = [
    { icon: Home2, label: 'Home' },
    { icon: Gauge, label: 'Dashboard' },
    { icon: DeviceDesktopAnalytics, label: 'Analytics' },
    { icon: CalendarStats, label: 'Releases' },
    { icon: User, label: 'Account' },
    { icon: Fingerprint, label: 'Security' },
    { icon: Settings, label: 'Settings' },
];

const linksMockdata = [
    'Apartment',
    'Settings',
    'Dashboard',
    'Releases',
    'Account',
    'Orders',
    'Clients',
    'Databases',
    'Pull Requests',
    'Open Issues',
    'Wiki pages',
];

const Admin = () => {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Releases');
    const [activeLink, setActiveLink] = useState('');
    const [error, setError] = useState('');
    const [authVer, setAuthVer] = useState(false)
    const auth = getAuth();

    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });


    const GetAusth = () => {
        console.log(form.values.email, form.values.password)
        signInWithEmailAndPassword(auth, form.values.email, form.values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setAuthVer(true)
                // ...
            })
            .catch((error) => {
                form.setFieldValue("email", "")
                form.setFieldValue("password", "")
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode)
            });
    }

    const mainLinks = mainLinksMockdata.map((link) => (
        <Tooltip label={link.label} position="right" withArrow transitionDuration={0} key={link.label}>
            <UnstyledButton
                onClick={() => setActive(link.label)}
                className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
            >
                <link.icon size={30}
                    strokeWidth={1.5}
                    color={'black'} />
            </UnstyledButton>
        </Tooltip>
    ));

    const links = linksMockdata.map((link) => (
        <a
            className={cx(classes.link, { [classes.linkActive]: activeLink === link })}
            href="/"
            onClick={(event) => {
                event.preventDefault();
                setActiveLink(link);
            }}
            key={link}
        >
            {link}
        </a>
    ));

    return (
        <div className=''>
            {
                !authVer ?
                    <div className='container mx-auto flex justify-center h-screen items-center'>
                        <Paper radius="md" p="xl" withBorder className='w-1/3'>
                            <Text size="lg" weight={500}>
                                Welcome to Mantine, {type} with
                            </Text>

                            <Divider label="Or continue with email" labelPosition="center" my="lg" />
                            <p className='text-center text-red-600'>{error}</p>
                            <form onSubmit={form.onSubmit(() => { })}>
                                <Stack>
                                    {type === 'register' && (
                                        <TextInput
                                            label="Name"
                                            placeholder="Your name"
                                            value={form.values.name}
                                            onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                        />
                                    )}

                                    <TextInput
                                        required
                                        label="Email"
                                        placeholder="hello@mantine.dev"
                                        value={form.values.email}
                                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                        error={form.errors.email && 'Invalid email'}
                                    />

                                    <PasswordInput
                                        required
                                        label="Password"
                                        placeholder="Your password"
                                        value={form.values.password}
                                        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                        error={form.errors.password && 'Password should include at least 6 characters'}
                                    />

                                    {type === 'register' && (
                                        <Checkbox
                                            label="I accept terms and conditions"
                                            checked={form.values.terms}
                                            onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                                        />
                                    )}
                                </Stack>

                                <Group position="apart" mt="xl">
                                    <Anchor
                                        component="button"
                                        type="button"
                                        color="dimmed"
                                        onClick={() => toggle()}
                                        size="xs"
                                    >
                                        {type === 'register'
                                            ? 'Already have an account? Login'
                                            : "Don't have an account? Register"}
                                    </Anchor>
                                    <Button type='submit' className='bg-gray-300' onClick={() => GetAusth()}>{upperFirst(type)}</Button>
                                </Group>
                            </form>
                        </Paper>
                    </div>
                    :
                    <div className='flex'>
                        <Navbar height={750} width={{ sm: 300 }}>
                            <Navbar.Section grow className={classes.wrapper}>
                                <div className={classes.aside}>
                                    <div className={classes.logo}>
                                        <Link to={"/"}><MantineLogo type="mark" size={30} /></Link>
                                    </div>
                                    {mainLinks}
                                </div>
                                <div className={classes.main}>
                                    <Title order={4} className={classes.title}>
                                        {active}
                                    </Title>

                                    {links}
                                </div>
                            </Navbar.Section>
                        </Navbar>
                        <Outlet/>
                    </div>
            }

        </div>
    );
}
export default Admin