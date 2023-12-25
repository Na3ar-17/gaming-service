'use client'
import CheckBox from '@/components/ui/CheckBox/CheckBox'
import Socials from '@/components/ui/Socials/Socials'
import { TypeUser } from '@/types/user.type'
import { NextPage } from 'next'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineUser } from 'react-icons/ai'
import { CiUnlock } from 'react-icons/ci'
import styles from './AuthForm.module.scss'

interface IProps {
  isRegister?: boolean
}

const AuthForm: NextPage<IProps> = ({ isRegister = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeUser>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<TypeUser> = async values => {
    console.log(values)
  }
  return (
    <main className={styles.section}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.icons}>
          <Socials font={22} />
        </div>
        <div className={styles.text}>
          <p>Authorization</p>
          <p>
            of your <span>account</span>
          </p>
        </div>
        <div className={styles.inputs}>
          {isRegister && (
            <div className={styles.input}>
              <AiOutlineUser className={styles.icon} />
              <input
                className={`${styles.email} ${
                  errors.name ? styles.error : ''
                } `}
                type="text"
                placeholder="Name"
                {...register('name', { required: true })}
              />
            </div>
          )}
          <div className={styles.input}>
            <AiOutlineUser className={styles.icon} />
            <input
              {...register('email', { required: true })}
              className={`${styles.email} ${errors.email ? styles.error : ''}`}
              type="text"
              placeholder="E-mail"
            />
          </div>
          <div className={styles.input}>
            <CiUnlock className={styles.icon} />
            <input
              {...register('password', { required: true })}
              className={`${styles.pass} ${
                errors.password ? styles.error : ''
              }`}
              type="text"
              placeholder="Password"
            />
          </div>
          <div className={styles.utils}>
            <button type="submit" className={styles.button}>
              {isRegister ? 'Registration' : 'Login'}
            </button>
            <div>
              <CheckBox /> <span>Remember me</span>
            </div>
          </div>
          <p className={styles.reg}>
            <Link href={isRegister ? '/authorization' : '/registration'}>
              {isRegister ? 'Back to login' : "Don't have an account?"}
            </Link>
          </p>
        </div>
      </form>
    </main>
  )
}

export default AuthForm
